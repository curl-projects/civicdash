import React, { useState, useEffect } from 'react';
import { Link, Form } from '@remix-run/react';
import { SocialsProvider } from "remix-auth-socials";
import type { User } from "~/routes/dashboard"
import Snackbar from "@mui/material/Snackbar"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


interface WrapperProps {
  error: Object | undefined;
  user: User;
  focusChild: React.ReactNode;
  linkChild: React.ReactNode;
  themeCarouselChild: React.ReactNode;
  predictionChild?: React.ReactNode;
}

export const TableOpenContext: Boolean = React.createContext(true)

export function DashboardWrapper(props: WrapperProps){
  const [tableOpen, setTableOpen] = useState(true)
  const [snackbarOpen, setSnackbarOpen ] = useState(false)

  useEffect(()=>{
    typeof props.error !== 'undefined' ? setSnackbarOpen(true) : setSnackbarOpen(false)
  }, [props.error])

  return(
    <>
      <TableOpenContext.Provider value={tableOpen}>
        <div className="min-h-screen flex flex-row">
          <div className="DashboardLinks">
            <Link to={"/dashboard"}><p>Dashboard</p></Link>
            <div><a
                    href="https://rooteco.notion.site/CivicDash-v2-1-8631ce9d3fd442a1a031eec9fa48cf3b"
                    target="_blank" rel="noreferrer">Docs</a></div>
                  <div><a href="https://discord.gg/bQHFfWUC" target="_blank" rel="noreferrer">Discord</a></div>
          </div>
          <div className="dashgrid">
            <div className="axis"/>
            <div className="focus">
              {props.focusChild}
            </div>
            <div className="header">
                {props.user &&
                  <Form
                    method="post"
                    action="/logout"
                  >
                    <button style={{color: "gray"}}><p>Logout</p></button>
                  </Form>
                }
                {!props.user &&
                  <Form
                    method="post"
                    action={`/auth/${SocialsProvider.GOOGLE}`}
                  >
                    <button style={{color: "gray"}}><p>Login or sign up</p></button>
                  </Form>
                }
                <div className="portfoliostats">
                  <button
                      className="metric"
                      onClick={()=>setTableOpen(prevState => !prevState)}>$1000</button>
                    <button
                      className="metric"
                      onClick={()=>setTableOpen(prevState => !prevState)}>3</button>
                </div>
            </div>
            <div className="dash">
              <div className="picker">
                {props.themeCarouselChild}
              </div>
              <div className="sparklineticker">
                {props.linkChild}
              </div>
            </div>
            <div className="DashboardInset" id="ModalAnchor">
              {props.predictionChild ? props.predictionChild : ""}
            </div>
          </div>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            message="Please log in or sign up to favourite indicators"
            onClose={()=>setSnackbarOpen(false)}
            action={
              <React.Fragment>
                <Form
                  method="post"
                  action={`/auth/${SocialsProvider.GOOGLE}`}
                >
                  <Button>
                    <p><b>Login or sign up</b></p>
                  </Button>
                </Form>
                <IconButton
                  aria-label="close"
                  sx={{ p: 0.5 }}
                  color="inherit"
                  onClick={()=>setSnackbarOpen(false)}
                  >
                    <CloseIcon />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
    </TableOpenContext.Provider>
    </>
  )
}


// <Link><p>Docs</p></Link>
// <Link><p>Discord</p></Link>
