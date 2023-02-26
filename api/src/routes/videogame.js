const axios = require ('axios');
const { Videogame, Genre } = require('../db.js');
const { API_KEY } = process.env


// ---------------------- Para traer el videojuego que coincida con el id pasado ---------------------

const getApiInfoById = async function(id) {

    try {
        const urlData = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const gamesData = {
            id: urlData.data.id,
            name: urlData.data.name,
            description: urlData.data.description_raw,
            image: urlData.data.background_image,
            released: urlData.data.released,
            rating: urlData.data.rating,
            platforms: urlData.data.platforms?.map(p => p.platform.name),
            genres: urlData.data.genres?.map(g => g.name)
        }

        return gamesData;

    } catch(error) {
        return null;
    }
}


const getDbInfoById = async function(id) {

    try {
        let dbInfo = await Videogame.findOne({
            where: {
                id: id
            },
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });

        dbInfo = JSON.parse(JSON.stringify(dbInfo));
        dbInfo.genres = dbInfo.genres.map(g => g.name);
               
        return dbInfo;

    } catch(error) {
        return null;
    }
}



const getSpecificGame = async (id) => {
    if (!isNaN(id)) {
      var idkey = parseInt(id);
      const result = await axios.get(
        `https://api.rawg.io/api/games/${idkey}?key=${API_KEY}`
      );
      if (result.data.id) {
        const gameFromApi = {
          id: result.data.id,
          name: result.data.name,
          platforms: result.data.platforms.map((p) => p.platform.name).toString(),
          released: result.data.released,
          image: result.data.background_image,
          description: result.data.description.replace(/<[^>]+>/g, ""),
          rating: result.data.rating,
          genres: result.data.genres.map((g) => g.name).toString(),
        };
        return gameFromApi;
      }
    }
    var gameFromDataBase = await Videogame.findByPk(id, {
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
  
    if (gameFromDataBase) {
      const objdbgame = {
        name: gameFromDataBase.name,
        platforms: gameFromDataBase.platforms,
        released: gameFromDataBase.released,
        image: gameFromDataBase.image,
        description: gameFromDataBase.description,
        rating: gameFromDataBase.rating,
        genres: gameFromDataBase.genres.map((g) => g.name).toString(),
      };
      return objdbgame;
    }
    throw "Juego no encontrado";
  };



// ---------------------- Ruta para encontrar videojuego por id ------------------------

exports.videoGameByIdRoute = async function(req, res, next) {
    const { id } = req.params;
  try {
    let response = await getSpecificGame(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send("No se pudo encontrar el juego");
  }
};




// ---------------------- Ruta para crear un videojuego ----------------------------
const postGame = async (
    name,
    description,
    released,
    rating,
    platforms,
    image,
    genres
  ) => {
    if (!name || !description || !platforms || !image) {
      throw "Faltan algunos elementos obligatorios para poder postear un video juego";
    } else {
      platforms = platforms.toString();
      name = name.trim();
      const newGame = await Videogame.create({
        name,
        description,
        released,
        rating,
        platforms,
        image,
        genres,
      });
      const vgGenre = await Genre.findAll({
        where: {
          name: genres,
        },
      });
  
      newGame.addGenre(vgGenre);
      return `El videojuego ${name} fue creado con exito!!`;
    }
  };

  exports.createvideoGameRoute = async (req, res) => {
    try{
        let { name, description, released, rating, platforms, image, genres } = req.body;
    let response = await postGame(
        name,
        description,
        released,
        rating,
        platforms,
        image,
        genres
      );
      if (name && description && image && platforms && genres) {
        return res.status(200).send(response);
      } else {
        return res.status(400).send(response);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  