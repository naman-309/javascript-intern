// export const socketHandler = (io) => {
//     io.on("connection", (socket) => {
//         console.log(
//             `${socket.user.name} connected`
//         );

//         console.log("User ID:", socket.user.id);
//         console.log("Socket ID:", socket.id);

//         socket.on("disconnect", () => {
//             console.log(
//                 `${socket.user.name} disconnected`
//             );
//         });
//     });
// };

export const socketHandler = (io) => {

    io.on("connection",
        //cb
        (socket) => {
            console.log(
                `${socket.user.name} connected`
            );

        })
}