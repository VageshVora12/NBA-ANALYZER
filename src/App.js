import './App.css';


function App() {
  return (
    <>
    <div className="App">
    <div class="topnav" style={{backgroundColor:'#333',overflow:'hidden'}}>
  <a class="active" href="#home" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Home</a>
  <a href="#news" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>News</a>
  <a href="#contact" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Contact</a>
  <a href="#about" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>About</a>
</div>
      <h2><p style={{color:"skyblue"}}>This is NBA Analayzer</p></h2>
  
    </div>
    <a href="http://localhost:9000/statistics">ALL STATS</a><br></br>
      <a href="http://localhost:9000/game/all-games">ALL GAMES</a><br></br>
      <a href="http://localhost:9000/player/all-players">ALL PLAYERS</a><br></br>
      <a href="http://localhost:9000/team/all-teams">ALL TEAMS</a><br></br>

    </>
  );
}

export default App;
