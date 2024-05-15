FROM cypress/included:13.6.6

RUN apt-get update && apt-get install curl

RUN adduser grader
RUN su grader
WORKDIR /home/grader
RUN mkdir actions-runner
WORKDIR /home/grader/actions-runner
RUN curl -O -L https://github.com/actions/runner/releases/download/v2.273.4/actions-runner-linux-x64-2.273.4.tar.gz
RUN tar xzf ./actions-runner-linux-x64-2.273.4.tar.gz 
RUN exit
WORKDIR /home/grader/actions-runner/
RUN bin/installdependencies.sh || true

USER grader
WORKDIR /home/grader/actions-runner/
CMD [ "./run.sh" ]