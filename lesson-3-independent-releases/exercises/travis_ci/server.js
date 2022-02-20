function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`[${getCurrentTime()}] Containers rule!`);
    await sleep(5000);
  }
}

function getCurrentTime() {
  return new Date().toTimeString().split(' ')[0];
}

main();
