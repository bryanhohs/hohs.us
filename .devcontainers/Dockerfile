FROM mcr.microsoft.com/devcontainers/base:ubuntu
RUN apt-get update && apt-get install -y git-lfs
USER codespace
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
RUN nvm install lts/krypton
RUN npm i -g pnpm @tailwindcss/cli @biomejs/biome
RUN pnpm setup