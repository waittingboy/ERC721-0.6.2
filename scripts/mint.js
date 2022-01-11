const MyGallery = artifacts.require("MyGallery")
const to = "0xa641FBBC5bcD92e3B577899700e2D8F70D372C1d"

module.exports = async callback => {
    const gallery = await MyGallery.deployed()
    await gallery.mint(to, "QmTfX9vcqRKb4RLMRJRxbucpAdvLTDp8wFHekpEFBzdS1s")
    await gallery.mint(to, "QmRDkxHRWjYXwj15u8epzifH4VmAubbzn6jgzRaz3AAJsq")
    await gallery.mint(to, "QmbVTQsrddtZaL9JrVmSyBNtNdxpbpnXxsQ8ipY5aQ4LK7")
    await gallery.mint(to, "QmRZuM834quJqK4EbFyuEsrc8rQePqrKQzxKvhj1getzSm")
    callback(gallery)
}