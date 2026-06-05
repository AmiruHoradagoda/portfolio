const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const techLogoMap = {
  HTML: `${devicon}/html5/html5-original.svg`,
  CSS: `${devicon}/css3/css3-original.svg`,
  "Tailwind CSS": `${devicon}/tailwindcss/tailwindcss-original.svg`,
  Bootstrap: `${devicon}/bootstrap/bootstrap-original.svg`,
  React: `${devicon}/react/react-original.svg`,
  Angular: `${devicon}/angularjs/angularjs-original.svg`,
  JavaScript: `${devicon}/javascript/javascript-original.svg`,
  TypeScript: `${devicon}/typescript/typescript-original.svg`,
  Flutter: `${devicon}/flutter/flutter-original.svg`,
  Java: `${devicon}/java/java-original.svg`,
  JavaFX: `${devicon}/java/java-original.svg`,
  PHP: `${devicon}/php/php-original.svg`,
  "Spring Boot": `${devicon}/spring/spring-original.svg`,
  "Node.js": `${devicon}/nodejs/nodejs-original.svg`,
  "Express.js": `${devicon}/express/express-original.svg`,
  Python: `${devicon}/python/python-original.svg`,
  MySQL: `${devicon}/mysql/mysql-original.svg`,
  MongoDB: `${devicon}/mongodb/mongodb-original.svg`,
  Docker: `${devicon}/docker/docker-original.svg`,
  Jenkins: `${devicon}/jenkins/jenkins-original.svg`,
  "GitHub Actions": `${devicon}/githubactions/githubactions-original.svg`,
  AWS: `${devicon}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  Linux: `${devicon}/linux/linux-original.svg`,
  Nginx: `${devicon}/nginx/nginx-original.svg`,
  Git: `${devicon}/git/git-original.svg`,
  OpenCV: `${devicon}/opencv/opencv-original.svg`,
  "Scikit-learn": `${devicon}/scikitlearn/scikitlearn-original.svg`,
  NumPy: `${devicon}/numpy/numpy-original.svg`,
  "Jupyter Notebook": `${devicon}/jupyter/jupyter-original.svg`,
  GitHub: `${devicon}/github/github-original.svg`,
  Firebase: `${devicon}/firebase/firebase-original.svg`,
  Figma: `${devicon}/figma/figma-original.svg`,
  "Adobe Photoshop": `${devicon}/photoshop/photoshop-original.svg`,
  Postman: `${devicon}/postman/postman-original.svg`,
} as const;

export const fallbackTechLogo = `${devicon}/devicon/devicon-original.svg`;

export function getTechLogo(tech: string) {
  return techLogoMap[tech as keyof typeof techLogoMap] ?? fallbackTechLogo;
}
