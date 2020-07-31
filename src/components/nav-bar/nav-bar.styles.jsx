import styled from 'styled-components';

const { navBarImgUrl } = (props) => props;

const NavBarContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background: black;

    .logo-container {
        display: flex;
        justify-content: flex-start;
        
        .logo-image {
            width: 48px;
            height: 48px;
            margin: auto 8px;
            border-radius: 100%;
            background: white;
            background-image: url(${navBarImgUrl});
        }
        
        .logo-title {
            margin: auto 16px;
            color: white;
        }
    }


    .menu {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: white;

        .menu-item {
            margin: 10px 15px;
            cursor: pointer;

            &:hover {
                color: gray;
            }
        }
    }
`;

export default NavBarContainer;