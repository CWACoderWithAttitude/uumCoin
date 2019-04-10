# uumCoin
Simple blockchain implementation using nodejs.

Project to demonstrate blockchain technology by mining a few blocks.

## Usage

* Build the image
```bash
$> docker build --rm -t uumblockchainserver . 
```

* Run the image
```bash
$> docker run -p 49153:8080 uumblockchainserver 
```

Then open localhost:49153 in your webbrowser.  
Have a look at the window where you started the docker image. You can see the new blocks as they're minded.  

You can increaese the difficulty level and rebuild the image to get an impression of the mining performance.

Have fun.
Volker
