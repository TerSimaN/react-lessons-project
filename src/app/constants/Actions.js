import ActionsNames from './ActionsNames';

function setImages(images) {
    return {
        type: ActionsNames.SET_IMAGES,
        images,
    }
}

function addImage(image) {
    return {
        type: ActionsNames.ADD_IMAGE,
        image
    }
}

function deleteImage(imageId) {
    return {
        type: ActionsNames.DELETE_IMAGE,
        imageId
    }
}

function setAlbums(albums) {
    return {
        type: ActionsNames.SET_ALBUMS,
        albums
    }
}

function addAlbum(album) {
    return {
        type: ActionsNames.ADD_ALBUM,
        album,
    }
}

function deleteAlbum(albumId) {
    return {
        type: ActionsNames.DELETE_ALBUM,
        albumId
    }
}

export {
    setImages,
    addImage,
    deleteImage,
    setAlbums,
    addAlbum,
    deleteAlbum,
}
