import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinksSaved(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linksSaved = JSON.parse(myLinks) || [];

    return linksSaved;
}

export async function saveLink(key, newLink){

    let linksStored = await getLinksSaved(key);
    const hasLinks = linksStored.some(link => link.id === newLink.id);

    if(hasLinks){
        console.log("Já existe na lista");
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}

export async function deleteLink(links, id){
    let myLinks = links.filter((item) => {
        return (item.id !== id);
    })

    await AsyncStorage.setItem('links', JSON.stringify(myLinks));
    return myLinks;
}