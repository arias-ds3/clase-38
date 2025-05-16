const { Author } = require('../models'); 

module.exports = {
    async find(req, res) {
        try {
            const author = await Author.findOne({
                where: { id_auhtor: req.params.id }
            });

            if (!author) {
                return res.status(404).json({ message: "Autor no encontrado" });
            }

            return res.status(200).json(author);
        } catch (error) {
            console.error("❌ Error al buscar el autor:", error);
            return res.status(500).json({ message: "Error interno del servidor", error });
        }
    }
};