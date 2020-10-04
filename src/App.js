import React from 'react';
import { Container, Row, Col, Media, Alert, Badge, Button, Breadcrumb, Card, CardGroup } from "react-bootstrap"


function App() {
  return (
    <div>
      <br/>
            <Container  fluid>
                  <Row>
                  <Col md={3}><Alert variant="primary">Website React Bootstrap</Alert></Col>
                    <Col></Col>
                    <Col></Col>

                    <Col md={"auto"}>
                        <Button variant="primary">
                              Notifications <Badge variant="light">9</Badge>
                              <span className="sr-only">unread messages</span>
                        </Button>
                        <Button variant="primary">
                              Message <Badge variant="light">19</Badge>
                              <span className="sr-only">unread messages</span>
                        </Button>
                    </Col>

                    <Col>
                      <Media>
                        <img
                          width={30}
                          height={30}
                          className="mr-3"
                          src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                          alt="gambar"
                        />
                        <Media.Body>
                          <h5>Andreas</h5>
                        </Media.Body>
                      </Media>
                    </Col>
                  </Row>


                  <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col md={4}>

                          <Breadcrumb>
                          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                          <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                          <Breadcrumb.Item active>Bola</Breadcrumb.Item>
                          </Breadcrumb>

                    </Col>
                  </Row>

                  <Row>
                    <Col xs={1}></Col>
                    <Col>
                      <CardGroup>
                                      <Card>
                                        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
                                        <Card.Body>
                                          <Card.Title><h6>Diego Godin Ukir Rekor Spesial Lawan Thailand</h6></Card.Title>
                                          <Card.Text>
                                            <font size="2">Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya
                                            melibas Thailand di final Piala Tiongkok. Diego Godin boleh berbangga setelah resmi menjadi.</font>
                                          </Card.Text>
                                          <Button variant="primary">Read More</Button>
                                        </Card.Body>
                                      </Card>


                                      <Card>
                                        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
                                        <Card.Body>
                                          <Card.Title><h6>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h6></Card.Title>
                                          <Card.Text>
                                            <font size="2">Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid.
                                            Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama
                                            kampiun Liggue 1 Prancis, demikian kata ayahnya.</font>
                                          </Card.Text>
                                          <Button variant="primary">Read More</Button>
                                        </Card.Body>
                                      </Card>


                                      <Card>
                                        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
                                        <Card.Body>
                                          <Card.Title><h6>Inggris Mau Jadi Tim Terbaik Di Dunia</h6></Card.Title>
                                          <Card.Text>
                                            <font size="2">Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley
                                             sangat optimistis. Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa
                                             menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul belakangan ini.</font>
                                          </Card.Text>
                                          <Button variant="primary">Read More</Button>
                                        </Card.Body>
                                      </Card>


                                      <Card>
                                        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
                                        <Card.Body>
                                          <Card.Title><h6>Sani Riszki Fuazi Tegaskan Mental Pemain Timnsa Indonesia U-23 tetap Bagus</h6></Card.Title>
                                          <Card.Text>
                                            <font size="2">gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya
                                            untuk bermain pada laga melawan Brunai darussalam U-23. Kedua tim akan bentrok pasa laga pemungkas grup K.</font>
                                          </Card.Text>
                                          <Button variant="primary">Read More</Button>
                                        </Card.Body>

                                      </Card>
                              </CardGroup>
                    </Col>
                    <Col xs={1}></Col>


                  </Row>


            </Container>




    </div>
  );
}

export default App;
