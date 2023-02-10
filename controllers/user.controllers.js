const fs= require('fs');
const path= require('path');
const bcrypt= require('bcryptjs');



module.exports= {
    getRegister: (req,res)=>{
        res.render('register')
    },

    postUser: function(req,res){
        const users= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
        const {email, password}= req.body;

        const userData= {
            email,
            password: bcrypt.hashSync(password, 10) //hashsync agarra un dato y lo hace ilegible
        }
    
        users.push(userData);
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users), null, ' ');
    
        res.redirect('/users/login')
    },

    getLogin: function(req,res){
        res.render('login')
    },

    postLogin: function(req,res){
        const users= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

        const{email,password, remember}= req.body;

        const loggedUser= users.find(user => user.email === email);

        if (loggedUser){
            let isCorrect= bcrypt.compareSync(password, loggedUser.password);

            if(!isCorrect){
                return res.redirect('/users/login');

            }            
        }else{
            return res.redirect('/users/login');
        }

        if (remember){
            res.cookie('email', loggedUser.email, { maxAge: 60 * 60 * 24 * 31 * 1000})
        }

        //se instala: npm i cookie-parser

        return res.redirect("/");
    },


}
