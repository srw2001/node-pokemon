const Pokemon = require('../models/pokemon.model');

exports.createPokemonBulk = async (req, res) => {
  const data = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      message: 'Body must be array'
    });
  }

  // validate ทุก record
  for (const p of data) {
    if (!Array.isArray(p.types) || p.types.length === 0) {
      return res.status(400).json({
        message: `Invalid types at pokedex_no ${p.pokedex_no}`
      });
    }
  }

  await Pokemon.insertMany(data, { ordered: false });

  res.json({
    message: 'success',
    status: true,
    count: data.length
  });
};

exports.findAllPokemons = async (req, res) => {

    const data = await Pokemon.find({});
    
    return res.status(200).json({
      message: 'success',
      status: true,
      data: data
    })
}

exports.FindOnePokemon = async (req, res) => {

  const id = req.params.id;

  if (id == null || id == undefined) {
    return res.status(400).json(
      {
        message: 'id is required',
        status: false,
        data: null,
      }
    )
  }

  const data = await Pokemon.findOne({pokedex_no: id});

  if (!data) {
    return res.status(404).json(
      {
        message: 'Pokemon not found',
        status: false,
        data: null,
      }
    )
  }

  return res.status(200).json(
    {
      message: 'success',
      status: true,
      data: data
    }
  )
}

exports.UpdateOnePokemon = async (req, res) => {

  const id = req.params.id;

  if (id == null || id == undefined) {
    return res.status(400).json(
      {
        message: 'id is required',
        status: false,
        data: null,
      }
    )
  }

  const dataExist = await Pokemon.findOne({pokedex_no: id});
  if (!dataExist) {
    return res.status(404).json(
      {
        message: 'Pokemon not found',
        status: false,
        data: null,
      }
    )
  }

  const updateData = req.body;
  updateData.updatedAt = new Date();
  await Pokemon.updateOne({pokedex_no: id}, updateData);
  
  return res.status(200).json(
    {
      message: 'success',
      status: true,
      data: null
    }
  )
}

exports.DeleteOnePokemon = async (req, res) => {
  const id = req.params.id;

  if (id == null || id == undefined) {
    return res.status(400).json(
      {
        message: 'id is required',
        status: false,
        data: null,
      }
    )
  }

  const dataDelete = await Pokemon.deleteOne({pokedex_no: id});

  if (!dataDelete) {
    return res.status(404).json(
      {
        message: 'Pokemon not found',
        status: false,
        data: null,
      }
    )
  }

  return res.status(200).json(
    {
      message: 'success',
      status: true,
      data: dataDelete
    }
  ) 
}