Promise.all([
    getJson(1),
    getJson(3),
    getJson(5),
    getJson(7),
    getJson(9),
])
.then(res => {
    const getTable = res.reduce(function (arr, row) {
        return arr.concat(row);
      }, []);
      const getFilteredTable = getTable.filter(res => {
          const words = res.title.split(" ");
          if(words.length === 3) {
              return res;
          }
      })
      const getMappedTable = getFilteredTable.map(res => {
          const object = {};
          object.id = res.id;
          object.title = res.title;
          return object;
      });
      console.log(JSON.stringify(getMappedTable));
});

async function getJson(id) {
    const getJson = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then(res => res.json())
    return getJson;
}