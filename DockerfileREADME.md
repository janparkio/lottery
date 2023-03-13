# Creating Docker Image

**Background**

While browsing through the author's program, I felt that the program was very cool, and I also wanted to deploy one by myself. The author only provided a server deployment method, so I came up with the idea of creating an image version. Following the author's deployment instructions, I created a version of the Docker image and tested it myself. It can be deployed and run in a Linux Docker environment. Docker images are very convenient and fast to use. Everyone is welcome to use them. The following is a detailed record of the image creation and usage instructions.

Finally, I would like to thank the author for providing the program.

**Usage Instructions**

1. Package the source code into a tar.gz format.

   ```shell
   tar -czvf lottery.tar.gz lottery/
   ```

2. Create a Dockerfile and build the image. The Dockerfile can be found in the root directory of the program.

   ```shell
   cp Dockerfile .
   docker build -t lucky:v01 .
   ```

3. Run the dockers, with the external service port 28888.

   - Method 1, with no mounted files.

     ```shell
     docker run -d -p 28888:8888 --name luckyGame lucky:v01
     ```

   - Method 2, mount the local Excel directory (for example, the current directory "$PWD") to the Excel directory in the container.

     ```shell
     docker run -d -p 28888:8888 -v /home/docker/lottery/config/:/lottery/server/data/ --name luckyGame lucky:v01
     ```

4. Access the service (here using the local IP address, you can replace it with the actual service IP).

   http://127.0.0.1:28888

5. My packaged image has been uploaded to Docker, as follows:

   https://hub.docker.com/r/yiliangjianghu/luckygame

   ```shell
   docker pull yiliangjianghu/luckygame
   ```
