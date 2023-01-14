const hello = (name, myCallback) => {
  setTimeout(() => {
    console.log(`Hola, ${name}`);
    myCallback(name);
  }, 1000);
};
const bye = (name, otherCallback) => {
  setTimeout(() => {
    console.log(`Adiós, ${name}`);
    otherCallback();
  }, 1000);
};

console.log("Iniciando proceso...");
hello("Noel", (name) => {
  bye(name, () => {
    console.log("Terminando proceso...");
  });
});
