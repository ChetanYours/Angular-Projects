//FROM node:latest as build

//WORKDIR /usr/local/app 

//COPY ./ /usr/local/app/

//RUN npm install

//RUN npm run build

//FROM nginx:latest

//COPY --from=build /usr/local/app/dist/weather-widget /usr/share/nginx/html

//EXPOSE 80

FROM nginx:1.15
COPY  ./dist/dym-project/ /usr/share/nginx/html
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf


# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
