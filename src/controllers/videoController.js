export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
    console.log(req.params);
    return res.send("Watch")
};

export const edit = (req, res) => {
    console.log(req.params);
    res.send("Edit");
};

const search = (req, res) => res.send("Search");
const upload = (req, res) => res.send("Upload");
const deleteVideo = (req, res) => res.send("Delete Video");