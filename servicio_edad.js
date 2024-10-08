const express = require('express');
const moment = require('moment');
const cors = require('cors');
const app = express();
const port = 3022;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/howoldareyou',
    cors({
        origin: '*', methods: ['POST']}),
    (req, res) => {
        const { birthdate } = req.body;
        if (!birthdate) {
            return res.status(400).json({ error: 'Fecha de nacimiento no proporcionada.' });
        }

        const currentDate = moment();
        const birthDate = moment(birthdate);
        if (!birthDate.isValid()) {
            return res.status(400).json({ error: 'Fecha de nacimiento no válida.' });
        }
        const years = currentDate.diff(birthDate, 'years');
        birthDate.add(years, 'years');
        const months = currentDate.diff(birthDate, 'months');
        birthDate.add(months, 'months');
        const days = currentDate.diff(birthDate, 'days');
        console.log(years+' u '+months+' g '+days);
       
        res.json({ years, months, days });
}); // cierra app.post

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});