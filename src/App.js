import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="newsletter">
      <div className="newsletter-sidebar">
        <div className="newsletter-sidebar-title">Menu</div>
        <a href="#" className="newsletter-sidebar-link">Link 1</a>
        <a href="#" className="newsletter-sidebar-link">Link 2</a>
        <a href="#" className="newsletter-sidebar-link">Link 3</a>
        <a href="#" className="newsletter-sidebar-link">Link 4</a>
      </div>
      <div className="newsletter-main">
        <div className="newsletter-main-title">Welcome to Our Newsletter</div>
        <div className="newsletter-sections">
          <div className="newsletter-section">
            <div className="newsletter-section-title">Section 1 Title</div>
            <div className="newsletter-section-text">
              Welcome to our newsletter! We have some exciting news to share with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu purus euismod, dictum velit nec, tristique nulla. Donec euismod vehicula neque, eget tincidunt dolor consectetur a. Suspendisse sollicitudin enim arcu, vel pellentesque leo semper eget.
            </div>
            <a href="#" className="newsletter-section-link">Read More</a>
          </div>
          <div className="newsletter-section">
            <div className="newsletter-section-title">Section 2 Title</div>
            <div className="newsletter-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu purus euismod, dictum velit nec, tristique nulla. Donec euismod vehicula neque, eget tincidunt dolor consectetur a. Suspendisse sollicitudin enim arcu, vel pellentesque leo semper eget.
            </div>
            <a href="#" className="newsletter-section-link">Read More</a>
          </div>
          <div className="newsletter-section">
            <div className="newsletter-section-title">Section 3 Title</div>
            <div className="newsletter-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu purus euismod, dictum velit nec, tristique nulla. Donec euismod vehicula neque, eget tincidunt dolor consectetur a. Suspendisse sollicitudin enim arcu, vel pellentesque leo semper eget.
            </div>
            <a href="#" className="newsletter-section-link">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
