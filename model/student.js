
const { Schema, model, models, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema  = new Schema({
    
      name:{type: String, require : true, },
      password:{
        type:String, 
        require:true
    },
      email:{type:String, require:true}
    
});

  studentSchema.pre('save', function (next) {

          if(!this.isModified('password')) {
             
              return next();
          }

          const user = this;

          bcrypt.genSalt( 10,async function(err, salt)  {
             
              if(err) return next(err);

              try {
                 
                const hash = await bcrypt.hash(user.password, salt);
                 user.password = hash;
                  return next();

              } catch (error) {

                return next(error);
                
              }
          })
  })

module.exports =  mongoose.model("student",  studentSchema)