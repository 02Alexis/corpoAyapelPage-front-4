// import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import { BsWhatsapp, BsInstagram, BsFacebook, BsYoutube, BsFillPlusCircleFill, BsPlusLg } from "react-icons/bs";
// import {MdAlternateEmail } from "react-icons/md";
// import {FaDonate } from "react-icons/fa";
// import client from '../../../../../sanity/client';

// const SocialMediaContactCard = () => {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

    
//     const [allPostData, setAllPostData] = useState(null)
//     useEffect(() => {
//         client
//             .fetch(
//                 `*[_type == "socialsMediaUrl"] {
//         linkWhatsapp,
//         linkInstagram,
//         linkFacebook,
//         }`
//             )
//             .then((data) => setAllPostData(data))
//             .catch(console.error)
//     }, [])
//     console.log(allPostData)



// const handleGoTo = (direction) => {
//     switch (direction) {
//         case 'whatsapp':
//             window.open(allPostData?.[0].linkWhatsapp, '_blank');
//             break;
//           case 'instagram':
//             window.open(allPostData?.[0].linkInstagram, '_blank');
//             break;
//           case 'facebook':
//             window.open(allPostData?.[0].linkFacebook, '_blank');
//             break;
//           default:
//             break;
//     }

    
// }

//     const actions = [
//         { icon: <BsWhatsapp onClick={() => handleGoTo('whatsapp')}/>, name: 'Whatsapp' },
//         { icon: <BsInstagram onClick={() => handleGoTo('instagram')} />, name: 'Instagram' },
//         { icon: <BsFacebook onClick={() => handleGoTo('facebook')}/>, name: 'Facebook' },    
//       ];

  
//     return (
//       <Box sx={{ height: '10px', width:'10px', transform: 'translateZ(0px)', flexGrow: 1 }}>
//         <SpeedDial
//           ariaLabel="SpeedDial controlled open example"
//           sx={{ position: 'absolute', bottom: 8, right: 8 }}
//           icon={<SpeedDialIcon />}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           open={open}
//         >
//           {actions.map((action) => (
//             <SpeedDialAction
//               key={action.name}
//               icon={action.icon}
//               tooltipTitle={action.name}
//               onClick={handleClose}
//             />
//           ))}
//         </SpeedDial>
//       </Box>
//     );
//   }

// export default SocialMediaContactCard