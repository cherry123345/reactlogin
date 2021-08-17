import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React,{useState} from 'react'




function App() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleValidate = (e)=>{
    e.preventDefault()
    if (user == 'reactjs@gmail.com' && pass == 123456)
    alert('successfull login')
    else
    alert('nope')
  }

  return (
    <div className="App-header">
      <h1>authentication port</h1>
      <div className="row">
        <div className="col-md-6">
        
        </div>

        <div className="col-md-15  my-auto bg-dark p-5 rounded">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" value={user} className="form-control" onChange={(e)=>setUser(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" value={pass} className="form-control"  onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <button type="submit"  className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
