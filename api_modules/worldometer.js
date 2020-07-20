import covid19 from "covid19-api";


module.exports = {
    getTotal
};


const getTotal = async () =>
{
    let query = await covid19.getReports();
    console.log(query);

}
