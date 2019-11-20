    // import library
    const express = require('express');
    // Use default PORT Or given from platform
    const PORT = process.env.PORT || 80;
    // create application
    const app = express();

    // some basic route
    app.get('/',(req, res) => {
        // send response.
        res.json({ message: 'coucou' });

    });

    // start server
    app.listen(PORT, (err) =>{
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.info("server started")
    });
