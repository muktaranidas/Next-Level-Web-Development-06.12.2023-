import mongoose from 'mongoose'
import app from "./app"
const port:number = 5000
// database connection
async function bootstrap() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
      console.log(`Database connection successfull`);
      app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`)
        //d
        
})
    } catch (err) {
        console.log(`Failed to connect database`, err);
  }
}
bootstrap()




