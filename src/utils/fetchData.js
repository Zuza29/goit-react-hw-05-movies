const fetchData = url =>
 fetch(url)
        .then(resp => resp.json())
        .catch(error => console.log(error));
export default fetchData;