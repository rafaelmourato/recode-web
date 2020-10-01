import Departament from '../pages/Departament';
import Allocation from '../pages/Allocation';
import Professor from '../pages/Professor';
import EditProfessor from '../pages/Professor/edit';
import Course from '../pages/Course';
import Home from '../pages/Home';

const routes = [{
  name: 'Professor',
  component: Professor,
  path: '/professor',
  navbar: true,
},
{
  name: 'Edit Professor',
  component: EditProfessor,
  path: '/professor/:id',
  navbar: false,
},
{
  name: 'Departament',
  component: Departament,
  path: '/departament',
  navbar: true,
}, {
  name: 'Allocation',
  component: Allocation,
  path: '/allocation',
  navbar: true,
}, {
  name: 'Course',
  component: Course,
  path: '/course',
  navbar: true,
}, {
  name: 'Home',
  component: Home,
  path: '/',
  navbar: false,
}];

export default routes;
