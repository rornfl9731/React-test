import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default () => (
    
<SideNav style={{'background-color':'#1BAEC5'}}
    onSelect={(selected) => {
        
    }}
    
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                My혜택
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                요금조회
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    요금명세서
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    상품별 요금
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barrchart">
                <NavText>
                    모바일 실시간 요금
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barrrchart">
                <NavText>
                    소액결제 내역
                </NavText>
            </NavItem>
        </NavItem>

        <NavItem eventKey="chartss">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                요금납부
            </NavText>
            <NavItem eventKey="charts/l1inechart">
                <NavText>
                    즉시납부
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/b1archart">
                <NavText>
                    납부 확인서
                </NavText>
            </NavItem>
            
        </NavItem>

        <NavItem eventKey="chartsss">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                조회/변경
            </NavText>
            <NavItem eventKey="charts/l2inechart">
                <NavText>
                    가입정보
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/b2archart">
                <NavText>
                    번호변경
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/b7archart">
                <NavText>
                    일시정지
                </NavText>
            </NavItem>

            
            
        </NavItem>


        <NavItem eventKey="chartssss">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                이용량/이용내역
            </NavText>
            <NavItem eventKey="charts/l4inechart">
                <NavText>
                    이용량조회/충전
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/b4archart">
                <NavText>
                    통화내역 조회
                </NavText>
            </NavItem>
         
        </NavItem>
    </SideNav.Nav>
</SideNav>
);