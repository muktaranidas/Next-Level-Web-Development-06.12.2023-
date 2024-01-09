import User from "./user.model";

 export const createUserToDB = async () => {
        const user = await new User({
            id: '890055',
            role: "student",
            // password: "Jhakanaka",
            name: {
                firstName: "Mukta Test Test",
                middleName: "Thakur",
                lastName: "Meghla",
            },
            password:'AmiPasswordJani77777',
            // dateOfBirth?: "07.04.1998",
            gender: "male",
            email: "mukta.meghla123@gmail.com",
            contactNo: "01302564259",
            emergencyContactNo: "018000000",
            presentAddress: "Dhaka",
            permanentAddress: "Kuti",

        });
        await user.save();
     // console.log(user);
     return user
    } 