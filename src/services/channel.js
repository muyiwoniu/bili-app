export default {
    async getChannels() {
        var resp = await fetch("/x/web-interface/web/channel/category/list");
        var data = await resp.json();
        // console.log(data.data.categories);
        return data.data.categories;
    }
}