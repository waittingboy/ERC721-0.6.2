const MyGallery = artifacts.require("MyGallery")
const from = "0xa641FBBC5bcD92e3B577899700e2D8F70D372C1d"
const to = "0x2CAf4C9C2CC0035F8E9Db3bE9FAa38e417fc8683"

module.exports = async callback => {
    const gallery = await MyGallery.deployed()
    await gallery.safeTransferFrom(from, to, 1)
    await gallery.safeTransferFrom(from, to, 2)
    await gallery.safeTransferFrom(from, to, 3)
    await gallery.safeTransferFrom(from, to, 4)
    callback(gallery)
}
