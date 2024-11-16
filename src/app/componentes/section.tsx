export default function Section() {
    return (
      <section>
        <h2 className="section-title">Nuevo</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="item-card">
              <button className="add-button">+</button>
            </div>
          ))}
        </div>
      </section>
    );
  }