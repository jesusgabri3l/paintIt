import Swal from 'sweetalert2';
const showAlert = (configuration: any) => {
  return Swal.fire({
    title: 'Default text tittle',
    text: '',
    icon: 'success',
    confirmButtonText: 'Confirm',
    confirmButtonColor: '#1ed760',
    cancelButtonText: 'Cancel',
    cancelButtonColor: '#E74C3C',
    background: '#181818',
    color: '#b3b3b3',
    iconColor: '#fff',
    ...configuration,
  }).then((result) => result);
};

export default showAlert;
