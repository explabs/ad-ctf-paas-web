import { Avatar, Box, Icon } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";

function renderPosition(position) {
  return (
    <>
      {position === 1 || position === 2 || position === 3 ? (
        <Avatar sx={{ bgcolor: "#292D28", color: "#F9F9F9" }}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0909 12.1952C12.7654 12.1952 12.5009 11.9304 12.5 11.6029C12.4989 11.275 12.7628 11.0081 13.0892 11.0072C14.574 11.0026 15.9866 10.1016 17.0667 8.4703C18.1035 6.90453 18.7125 4.85691 18.8054 2.65151H16.2018C15.8753 2.65151 15.6107 2.3856 15.6107 2.05751C15.6107 1.72941 15.8753 1.4635 16.2018 1.4635H19.4089C19.7354 1.4635 20 1.72941 20 2.05751C20 4.71909 19.3078 7.23015 18.0511 9.1285C16.7455 11.1002 14.9847 12.1893 13.0929 12.1952C13.0923 12.1952 13.0917 12.1952 13.0909 12.1952Z"
              fill="#64D86B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.90907 12.1952C6.9083 12.1952 6.90784 12.1952 6.90722 12.1952C5.01544 12.1893 3.2545 11.1002 1.94904 9.1285C0.692215 7.23015 0 4.71909 0 2.05751C0 1.72941 0.264603 1.4635 0.591084 1.4635H3.79818C4.12466 1.4635 4.38926 1.72941 4.38926 2.05751C4.38926 2.3856 4.12466 2.65151 3.79818 2.65151H1.19464C1.28746 4.85691 1.89655 6.90453 2.93326 8.4703C4.01337 10.1016 5.42597 11.0026 6.91076 11.0072C7.23724 11.0081 7.50108 11.275 7.5 11.6029C7.49907 11.9304 7.23463 12.1951 6.90907 12.1952Z"
              fill="#64D86B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4236 6.10352e-05H4.07637C3.75817 6.10352e-05 3.5 0.258058 3.5 0.57639C3.5 3.96187 4.16388 7.15389 5.36915 9.56427C6.1414 11.1085 7.08581 12.2295 8.13018 12.8713V16.0091C8.13018 16.3274 8.38835 16.5854 8.70656 16.5854H11.7934C12.1118 16.5854 12.3698 16.3274 12.3698 16.0091V12.8713C13.4142 12.2296 14.3587 11.1085 15.1308 9.56427C16.3361 7.15389 17 3.96187 17 0.57639C17 0.258058 16.742 6.10352e-05 16.4236 6.10352e-05Z"
              fill="#A4F644"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.1983 16.0091V12.8713C13.2814 12.2296 14.2609 11.1085 15.0616 9.56427C16.3115 7.15389 17 3.96187 17 0.57639C17 0.258058 16.7324 6.10352e-05 16.4023 6.10352e-05H10V16.5854H11.6006C11.9308 16.5854 12.1983 16.3274 12.1983 16.0091Z"
              fill="#008F11"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3625 15.6098H7.1375C5.95895 15.6098 5 16.5946 5 17.805V19.4033C5 19.7329 5.26017 20 5.58118 20H14.9188C15.2398 20 15.5 19.7329 15.5 19.4033V17.805C15.5 16.5946 14.5412 15.6098 13.3625 15.6098Z"
              fill="#008F11"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2607 15.6098H10V20H14.8911C15.2274 20 15.5 19.7329 15.5 19.4033V17.805C15.5 16.5946 14.4955 15.6098 13.2607 15.6098Z"
              fill="#026702"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4062 20.0001H4.5938C4.26597 20.0001 4 19.7817 4 19.5123C4 19.2429 4.26597 19.0245 4.5938 19.0245H15.4062C15.7342 19.0245 16 19.2429 16 19.5123C16 19.7817 15.7342 20.0001 15.4062 20.0001Z"
              fill="#00FF41"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4062 19.0245H10V20.0001H15.4062C15.7342 20.0001 16 19.7817 16 19.5123C16 19.2429 15.7342 19.0245 15.4062 19.0245Z"
              fill="#008F11"
            />
          </svg>
        </Avatar>
      ) : (
        <div className="team-pos">
          <span>{position}</span>
        </div>
      )}
    </>
  );
}

const Service = ({ service }) => {
  let hpColor = "#00FF19";
  if (service.hp < 75) {
    hpColor = "#F8FD00";
  }
  if (service.hp < 50) {
    hpColor = "#F98803";
  }
  if (service.hp < 25) {
    hpColor = "#F40A0A";
  }

  let attacksColor;
  if (service.lost > 5) {
    attacksColor = "#FF0935";
  } else if (service.lost > 2) {
    attacksColor = "#FF8E1D";
  } else if (service.lost > 0) {
    attacksColor = "#FFB023";
  } else {
    attacksColor = "#D4D4DC";
  }

  let slaColor;
  if (service.sla < 30) {
    slaColor = "#FF0935";
  } else if (service.sla < 60) {
    slaColor = "#FF8E1D";
  } else {
    slaColor = "#00FF19";
  }

  return (
    <div
      className={[
        "service-card",
        `${service.status >= 0 ? "up" : "down"}`,
      ].join(" ")}
    >
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Typography sx={{ color: attacksColor, whiteSpace: "nowrap" }}>
            {service.lost} <Icon>phishing</Icon>
          </Typography>
          <Typography sx={{ color: attacksColor, whiteSpace: "nowrap" }}>
            {service.gained} <Icon>security</Icon>
          </Typography>
        </Box>
        <Typography sx={{ color: hpColor, whiteSpace: "nowrap" }}>
          {service.reputation}
          /100 reputation
        </Typography>
        <Typography sx={{ color: slaColor, whiteSpace: "nowrap" }}>
          {service.sla} sla
        </Typography>
      </div>
      <div>
        {service.status >= 0 ? (
          <svg width="15" height="12" viewBox="0 0 15 12">
            <path
              d="M6.88244 0.345601C6.95125 0.239016 7.04332 0.151867 7.15072 0.0916624C7.25813 0.0314569 7.37765 0 7.49898 0C7.62032 0 7.73984 0.0314569 7.84724 0.0916624C7.95465 0.151867 8.04672 0.239016 8.11553 0.345601L14.8661 10.7449C14.9442 10.8648 14.99 11.0053 14.9985 11.1511C15.0071 11.2969 14.978 11.4423 14.9144 11.5717C14.8509 11.7011 14.7553 11.8094 14.6381 11.8849C14.5208 11.9604 14.3865 12.0002 14.2495 12H0.748455C0.611827 11.9994 0.477937 11.9591 0.361185 11.8834C0.244433 11.8077 0.149235 11.6995 0.0858294 11.5704C0.0224239 11.4414 -0.0067904 11.2963 0.0013282 11.1508C0.00944681 11.0054 0.0545911 10.865 0.131906 10.7449L6.88244 0.345601Z"
              fill="#00FF19"
            />
          </svg>
        ) : (
          <svg width="15" height="12" viewBox="0 0 15 12">
            <path
              d="M8.11695 11.6544C8.04814 11.761 7.95607 11.8481 7.84867 11.9083C7.74126 11.9685 7.62174 12 7.50041 12C7.37907 12 7.25955 11.9685 7.15215 11.9083C7.04474 11.8481 6.95267 11.761 6.88386 11.6544L0.133329 1.25511C0.0551918 1.13517 0.00937088 0.994677 0.000843492 0.848906C-0.0076839 0.703136 0.0214088 0.55766 0.0849613 0.428286C0.148514 0.298911 0.244095 0.190586 0.361321 0.115079C0.478546 0.0395717 0.612932 -0.000229059 0.749878 9.91654e-07L14.2509 9.91654e-07C14.3876 0.000602878 14.5215 0.0409155 14.6382 0.116603C14.755 0.192291 14.8502 0.300491 14.9136 0.429566C14.977 0.558641 15.0062 0.703709 14.9981 0.849167C14.9899 0.994626 14.9448 1.13497 14.8675 1.25511L8.11695 11.6544Z"
              fill="#FF0935"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
const ServiceHeader = ({ children }) => (
  <div role="button" className="service-card">
    <Typography
      sx={{
        whiteSpace: "nowrap",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Typography>
  </div>
);

export const Scoreboard = ({ teams }) => {
  const ref = useRef(null);

  const [left, setLeft] = useState(0);

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

  const disableScroll = () => {
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
  };

  const enableScroll = () => {
    document.removeEventListener("wheel", preventDefault, false);
  };

  const handleScroll = (e) => {
    const delta = e.deltaY || e.detail || e.wheelDelta;
    let newValue = delta > 0 ? left + 20 : left - 20;
    newValue = newValue > 0 ? 0 : newValue;
    newValue = newValue < -160 ? -160 : newValue;

    setLeft(newValue);
  };

  if (!teams) {
    return (
      <div className="container">
        <h2>Scoreboard</h2>
        <div style={{ textAlign: "center" }}>¯\_(ы)_/¯</div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h2>Scoreboard</h2>
        <ul className="table">
          <li className="table-header">
            <div className="col col-1" />
            <div className="col col-2">Команда</div>
            <div className="col col-3">
              <div
                className="services-line"
                style={{ transform: `translateX(${left}px)` }}
              >
                {Object.keys(teams[0].srv).map((e) => (
                  <ServiceHeader>{e}</ServiceHeader>
                ))}
              </div>
            </div>
            <div className="col col-4">Счет</div>
          </li>

          {teams.map((row) => {
            let color = "#D4D4DC";
            if (row.place === 1) {
              color = "#FFD12B";
            }
            if (row.place === 2) {
              color = "#C0C0C0";
            }
            if (row.place === 3) {
              color = "#CD7F32";
            }

            return (
              <li key={row.id} className="table-row" style={{ color }}>
                <div className="col col-1" data-label="Position">
                  {renderPosition(row.place)}
                </div>
                <div className="col col-2" data-label="Team">
                  <span>{row.id}</span>
                  {row.changed_place !== 0 && (
                    <span className="evolution">
                      {row.changed_place > 0 ? (
                        <svg width="15" height="12" viewBox="0 0 15 12">
                          <path
                            d="M6.88244 0.345601C6.95125 0.239016 7.04332 0.151867 7.15072 0.0916624C7.25813 0.0314569 7.37765 0 7.49898 0C7.62032 0 7.73984 0.0314569 7.84724 0.0916624C7.95465 0.151867 8.04672 0.239016 8.11553 0.345601L14.8661 10.7449C14.9442 10.8648 14.99 11.0053 14.9985 11.1511C15.0071 11.2969 14.978 11.4423 14.9144 11.5717C14.8509 11.7011 14.7553 11.8094 14.6381 11.8849C14.5208 11.9604 14.3865 12.0002 14.2495 12H0.748455C0.611827 11.9994 0.477937 11.9591 0.361185 11.8834C0.244433 11.8077 0.149235 11.6995 0.0858294 11.5704C0.0224239 11.4414 -0.0067904 11.2963 0.0013282 11.1508C0.00944681 11.0054 0.0545911 10.865 0.131906 10.7449L6.88244 0.345601Z"
                            fill="#00FF19"
                          />
                        </svg>
                      ) : (
                        <svg width="15" height="12" viewBox="0 0 15 12">
                          <path
                            d="M8.11695 11.6544C8.04814 11.761 7.95607 11.8481 7.84867 11.9083C7.74126 11.9685 7.62174 12 7.50041 12C7.37907 12 7.25955 11.9685 7.15215 11.9083C7.04474 11.8481 6.95267 11.761 6.88386 11.6544L0.133329 1.25511C0.0551918 1.13517 0.00937088 0.994677 0.000843492 0.848906C-0.0076839 0.703136 0.0214088 0.55766 0.0849613 0.428286C0.148514 0.298911 0.244095 0.190586 0.361321 0.115079C0.478546 0.0395717 0.612932 -0.000229059 0.749878 9.91654e-07L14.2509 9.91654e-07C14.3876 0.000602878 14.5215 0.0409155 14.6382 0.116603C14.755 0.192291 14.8502 0.300491 14.9136 0.429566C14.977 0.558641 15.0062 0.703709 14.9981 0.849167C14.9899 0.994626 14.9448 1.13497 14.8675 1.25511L8.11695 11.6544Z"
                            fill="#FF0935"
                          />
                        </svg>
                      )}
                      {`${row.changed_place > 0 ? "+" : ""}${Math.abs(
                        row.changed_place
                      )}`}
                    </span>
                  )}
                </div>
                <div
                  className="col col-3"
                  data-label="Services"
                  onWheel={handleScroll}
                  onMouseEnter={disableScroll}
                  onMouseLeave={enableScroll}
                >
                  <div
                    className="services-line"
                    style={{ transform: `translateX(${left}px)` }}
                    ref={ref}
                  >
                    {Object.values(row.srv).map((e, i) => (
                      <Service key={i} service={e} i={i} />
                    ))}
                  </div>
                </div>
                <div className="col col-4" data-label="Score">
                  {row.total_score}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
