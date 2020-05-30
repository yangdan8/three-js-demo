import {
  Scene,
  Camera,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
} from 'three';

export class Application {
  private scene: Scene;
  private camera: Camera;
  private renderer: WebGLRenderer;

  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new WebGLRenderer();
    document.body.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onWindowResize);

    const boxGeometry = new BoxGeometry(1, 1, 1);
    new MeshBasicMaterial();
  }

  private onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
