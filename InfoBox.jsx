import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      {/* <h1>WeatherInfo - {info.weather}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
              <div>Tempreture= {info.temp}&deg;C</div>
              <br />
              <div>Humidity= {info.humidity}</div>
              <p>Min temp={info.tempMin}&deg;C</p>
              <p>Max temp={info.tempMax}&deg;C</p>
              <p>the weather can be described as <i>{info.weather} </i>and feels like {info.feelslike}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}