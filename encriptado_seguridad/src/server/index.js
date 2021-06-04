const {app,server} = requiere('./server');

function main(){
    
     await server.listen(app.get('port'),function(){
            console.log('server on port',app.get('port'));
     });

}

main();