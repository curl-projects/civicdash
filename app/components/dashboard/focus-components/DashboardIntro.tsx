import type { UserType } from "~/routes/dashboard";
import rootelogo from "../../../../public/assets/roote.png";
import seal from "../../../../public/assets/seal.png";

type DashboardIntroProps = {
  user: UserType
}

export function DashboardIntro(props: DashboardIntroProps){
  return(
    <>
      <div className="flex-row">
        <img src={seal} alt="seal" className="icon"/>
        <img src={rootelogo} alt="roote logo" className="icon" style= {{mixBlendMode: "multiply", borderRadius: "100px"}}/>
      </div>
      <div className="spacer-unit"/>
      <div>
        <h3 className="textshadow-light">
          Welcome to CivicDash<strong>{props.user ? `, ${props.user.name.givenName}` : ""} </strong>
        </h3>
        <p> A community-driven platform for proposing and evaluating solutions to realize Civic Abundance</p>
      </div>
    </>
  )
}
