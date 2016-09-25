import { AlumnosComponent } from './alumnos/alumnos.component';
import { QuepedroComponent } from './quepedro/quepedro.component';
import { AversijalaComponent } from './aversijala/aversijala.component';
import { SpotifyComponent } from './spotify/spotify.component';

export const App_Routes = [
    {
        path:'',
        component:QuepedroComponent
    },
    {
        path:'alumnos',
        component:AlumnosComponent
    },
    {
        path:'aversijala',
        component:AversijalaComponent
    },
    {
        path:'spotify',
        component:SpotifyComponent
    }
]