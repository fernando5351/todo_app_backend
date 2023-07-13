const nodemailer = require("nodemailer");
const config = require('../../config');

class MailerService {
  constructor() {}

  sendMail(to, subject, text) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
			secure: true,
			port: 465,
      auth: {
        user: config.emailAdress,
        pass: config.emailPassword
      },
    });
    let messageObj = {
      from: config.emailAdress,
      to: `${to}`,
      subject: `${subject}`,
      html: `<p>${text}</p>`,
    };
    return new Promise((resolve, reject) => {
			transporter.sendMail(messageObj, (error, info) => {
				if (error) {
					reject(boom.badRequest(error));
				} else {
					resolve(info);
				}
			});
		});
  }

  async generateCode(){
    let codigo = '';
    const caracteres = '0123456789';
    const longitud = 5;
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indiceAleatorio);
    }
  
    return codigo;
  }  

}

module.exports = MailerService;
