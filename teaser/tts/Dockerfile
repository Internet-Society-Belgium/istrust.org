FROM ubuntu:focal

WORKDIR /tmp

RUN apt-get update
RUN apt-get install --yes --no-install-recommends \
        build-essential \
        python3.8 \
        libpython3.8-dev \
        python3-pip \
        libsndfile1-dev
RUN rm -rf /var/lib/apt/lists/*
RUN pip install TTS

WORKDIR /workdir

ENTRYPOINT ["tts-server"]
