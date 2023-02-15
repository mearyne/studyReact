import Chart, {ArgumentAxis, Legend, Series} from "devextreme-react/chart";

const Data = () => {

    const data = [{
        arg: 1990,
        val: 5320816667
    }, {
        arg: 2000,
        val: 6127700428
    }, {
        arg: 2010,
        val: 6916183482
    }];

    return (

        <div>
            <div className="dataGrid">
                <Chart dataSource={data}>
                    <ArgumentAxis tickInterval={10}/>
                    <Series type="bar"/>
                    <Legend visible={false}/>
                </Chart>
            </div>

        </div>
    )

};

export default Data
