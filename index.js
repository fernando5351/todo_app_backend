const app = require('./src/app');

app.listen(app.get('port'), ()=>{
    try {
        console.log('servidor corriendo en el puerto' + app.get('port'));
    } catch (error) {
        console.log('tienes un error en: ' + error)
    }
})