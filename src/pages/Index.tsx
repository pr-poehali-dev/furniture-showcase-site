import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Минималистичный диван',
      category: 'Гостиная',
      price: '89 990 ₽',
      image: 'https://cdn.poehali.dev/projects/d15a541f-6891-471c-82b1-f696b454d380/files/0f375b80-c196-4596-9d68-6f42ab4088c6.jpg'
    },
    {
      id: 2,
      name: 'Обеденная группа',
      category: 'Столовая',
      price: '64 990 ₽',
      image: 'https://cdn.poehali.dev/projects/d15a541f-6891-471c-82b1-f696b454d380/files/a30e18eb-7e47-450c-80c6-3ce804df70ec.jpg'
    },
    {
      id: 3,
      name: 'Кровать Скандинавия',
      category: 'Спальня',
      price: '54 990 ₽',
      image: 'https://cdn.poehali.dev/projects/d15a541f-6891-471c-82b1-f696b454d380/files/afb0ea84-48c8-47c7-8a9d-9a2bf67ea30b.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">МЕБЕЛЬ</h1>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('catalog')}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                О магазине
              </button>
              <button 
                onClick={() => scrollToSection('delivery')}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Доставка
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                Мебель для современного дома
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-light">
                Минималистичный дизайн. Качественные материалы. Долговечность.
              </p>
              <Button 
                onClick={() => scrollToSection('catalog')}
                size="lg" 
                className="rounded-none h-12 px-8"
              >
                Смотреть каталог
              </Button>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-light tracking-tight mb-12 animate-fade-in">Каталог</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-medium mb-3">{product.name}</h3>
                    <p className="text-2xl font-light">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl font-light tracking-tight mb-8">О магазине</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мы создаем мебель, которая объединяет функциональность и эстетику. 
                Каждое изделие продумано до мелочей — от выбора материалов до финальной отделки.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша философия — минимализм без компромиссов в качестве. 
                Мы верим, что хорошая мебель служит десятилетиями.
              </p>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-light tracking-tight mb-12 text-center animate-fade-in">
              Доставка
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-sm p-8 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-3">По городу</h3>
                <p className="text-muted-foreground">
                  Бесплатная доставка при заказе от 30 000 ₽
                </p>
              </Card>

              <Card className="border-0 shadow-sm p-8 text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-3">По России</h3>
                <p className="text-muted-foreground">
                  Доставка транспортными компаниями в любой регион
                </p>
              </Card>

              <Card className="border-0 shadow-sm p-8 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-3">Самовывоз</h3>
                <p className="text-muted-foreground">
                  Забрать заказ можно со склада в удобное время
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light tracking-tight mb-12 text-center animate-fade-in">
                Контакты
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 123
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground">info@mebel.ru</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Часы работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 — 20:00</p>
                  </div>
                </div>

                <Card className="border-0 shadow-sm p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <h3 className="text-lg font-medium mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="rounded-none border-muted"
                    />
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="rounded-none border-muted"
                    />
                    <Textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="rounded-none border-muted resize-none"
                    />
                    <Button className="w-full rounded-none h-12">
                      Отправить
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light">© 2024 МЕБЕЛЬ. Все права защищены</p>
            <div className="flex gap-6">
              <button className="hover:opacity-70 transition-opacity">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="hover:opacity-70 transition-opacity">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="hover:opacity-70 transition-opacity">
                <Icon name="Mail" size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
