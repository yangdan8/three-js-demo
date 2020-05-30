import {
  Scene,
  Camera,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
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

    const boxGeometry = new BoxGeometry(1, 1, 1);
    const meshBasicMaterial = new MeshBasicMaterial({ color: 'white' });
    const mesh = new Mesh(boxGeometry, meshBasicMaterial);

    this.scene.add(mesh);

    this.render();

    document.body.appendChild(this.renderer.domElement);
    this.onWindowResize();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private render() {
    window.requestAnimationFrame(() => {
      this.renderer.render(this.scene, this.camera);
    });
  }
}
