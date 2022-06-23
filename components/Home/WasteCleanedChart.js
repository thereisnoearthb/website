import {
  XYPlot,
  XAxis,
  YAxis,
  AreaSeries
} from 'react-vis';

export default function WasteCleanedChart(props) {
  return (
    <XYPlot width={325} height={250} className="mx-auto">
      <AreaSeries
        color={'#2e4a79'}
        curve="curveNatural"
        data={props.data}
      />
      <YAxis
        tickTotal={7}
        position='middle'
        title='Waste Removed (kilograms)'
        style={{
          text: { fontFamily: 'Roboto', fontSize: '.8rem', stroke: 'none', fill: '#2e4a79' },
          title: {
            fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79', fontSize: '.75rem'
          }
        }} />
      <XAxis
        tickLabelAngle={-90}
        tickTotal={props.data.length}
        position='end'
        title='Cleanup Drive Number'
        style={{
          text: { fontFamily: 'Roboto', stroke: 'none', fontSize: '.8rem', fill: '#2e4a79' },
          title: {
            fontFamily: 'Roboto', stroke: 'none', fill: '#e1d3b5', fontSize: '.75rem'
          }
        }}
      />
    </XYPlot>
  );
}
