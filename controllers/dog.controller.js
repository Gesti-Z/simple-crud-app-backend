const Dog = require('../models/dog.model');

const getDogs = async (req, res) => {

    try {
        const dogs = await Dog.find({});
        res.status(200).json(dogs);
    } catch(error) {
        res.status(500).json({message: error.message});
    }

}


const getDog = async (req, res) => {

    try {
        const { id } = req.params;
        const dog = await Dog.findById(id);
        res.status(200).json(dog);
    } catch(error) {
        res.status(500).json({message: error.message});
    }

}

const createDog = async (req, res) => {

    try {
        const dog = await Dog.create(req.body);
        res.status(200).json(dog);
    } catch(error) {
        res.status(500).json({message: error.message});
    }

}




const updateDog = async (req, res) => {
    try {
        const {id} = req.params;

        const dog = await Dog.findByIdAndUpdate(id, req.body);

        if(!dog) {
            res.status(404).json({message: "Dog not found!"});
        }

        const updatedDog = await Dog.findById(id);
        res.status(200).json(updatedDog);

    } catch(error) {
        res.status(500).json({message: error.message});
    }
}


const deleteDog = async (req, res) => {
    try {
        const { id } = req.params;
        const dog = await Dog.findByIdAndDelete(id);

        if(!dog) {
            return res.status(404).json({message: "Dog does not exist!"});
        }

        res.status(200).json({message: "Dog deleted successfully!"});

    } catch(error) {
        res.status(500).json({message: error.message})
    }
}


const findDogByName = async (req, res) => {
    try {
      const { name } = req.query;
      const cat = await Dog.find({ name });
      res.status(200).json(dog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getDogs,
    getDog,
    createDog, 
    updateDog,
    deleteDog,
    findDogByName
};